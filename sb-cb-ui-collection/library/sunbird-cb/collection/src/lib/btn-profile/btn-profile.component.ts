import { Component, Input, OnInit, OnDestroy, HostBinding } from '@angular/core'
import { NsWidgetResolver, WidgetBaseComponent } from '@sunbird-cb/resolver'
import { ConfigurationsService, LogoutComponent, NsAppsConfig, NsPage } from '@sunbird-cb/utils'
import { IBtnAppsConfig } from '../btn-apps/btn-apps.model'
import { MatDialog } from '@angular/material/dialog'
import { Subscription } from 'rxjs'
import { ROOT_WIDGET_CONFIG } from '../collection.config'
/* tslint:disable*/
import _ from 'lodash'
interface IGroupWithFeatureWidgets extends NsAppsConfig.IGroup {
  featureWidgets: NsWidgetResolver.IRenderConfigWithTypedData<NsPage.INavLink>[]
}
@Component({
  selector: 'ws-widget-btn-profile',
  templateUrl: './btn-profile.component.html',
  styleUrls: ['./btn-profile.component.scss'],
})

export class BtnProfileComponent extends WidgetBaseComponent
  implements OnInit, OnDestroy, NsWidgetResolver.IWidgetData<any> {
  @HostBinding('id')
  public id = 'Profile_link'
  @Input() widgetData!: any
  portalLinks: any[] = []
  private readonly featuresConfig: IGroupWithFeatureWidgets[] = []
  @HostBinding('class')
  public class = 'profile-link'
  userRoles: Set<string> | null = null
  basicBtnAppsConfig: NsWidgetResolver.IRenderConfigWithTypedData<IBtnAppsConfig> = {
    widgetType: 'actionButton',
    widgetSubType: 'actionButtonApps',
    widgetData: { allListingUrl: '/app/features' },
  }
  settingBtnConfig: NsWidgetResolver.IRenderConfigWithTypedData<IBtnAppsConfig> = {
    widgetType: 'actionButton',
    widgetSubType: 'actionButtonSetting',
    widgetData: { allListingUrl: '/app/features' },
  }
  isPinFeatureAvailable = true
  pinnedApps: NsWidgetResolver.IRenderConfigWithTypedData<NsPage.INavLink>[] = []

  btnAppsConfig!: NsWidgetResolver.IRenderConfigWithTypedData<IBtnAppsConfig>
  btnSettingsConfig!: NsWidgetResolver.IRenderConfigWithTypedData<IBtnAppsConfig>
  private pinnedAppsSubs?: Subscription
  givenName = 'Guest'
  profileImage!: string | null
  disableViewProfile = false
  disableAllFeatures = false
  disableSettings = false
  constructor(
    private configSvc: ConfigurationsService,
    private dialog: MatDialog,
  ) {
    super()
    this.btnAppsConfig = { ...this.basicBtnAppsConfig }
    this.btnSettingsConfig = { ... this.settingBtnConfig }
    if (this.configSvc.userProfile) {
      this.givenName = `${this.configSvc.userProfile.firstName}`
      // this.givenName = `${this.configSvc.userProfile.firstName} ${this.configSvc.userProfile.lastName}`
      this.profileImage = this.configSvc.userProfile.profileImage ||
        (this.configSvc.userProfile ? this.configSvc.userProfile.profileImage : null) || null
      if (localStorage.getItem(this.configSvc.userProfile.userId)) {
        this.profileImage = localStorage.getItem(this.configSvc.userProfile.userId)
      }
    }
    if (this.configSvc.appsConfig) {
      const appsConfig = this.configSvc.appsConfig
      const availGroups: NsAppsConfig.IGroup[] = []
      appsConfig.groups.forEach((group: any) => {
        if (group.hasRole.length === 0 || this.checkhasRole(group.hasRole)) {
          availGroups.push(group)
        }
      })
      this.featuresConfig = availGroups.map(
        (group: NsAppsConfig.IGroup): IGroupWithFeatureWidgets => (
          {
            ...group,
            featureWidgets: _.compact(group.featureIds.map(
              (id: string): NsWidgetResolver.IRenderConfigWithTypedData<NsPage.INavLink> | undefined => {
                const permissions = _.get(appsConfig, `features[${id}].permission`)
                if (!permissions || permissions.length === 0 || this.checkhasRole(permissions)) {
                  return ({
                    widgetType: ROOT_WIDGET_CONFIG.actionButton._type,
                    widgetSubType: ROOT_WIDGET_CONFIG.actionButton.feature,
                    widgetHostClass: 'my-2 px-2 w-1/2 sm:w-1/3 md:w-1/6 w-lg-1-8 box-sizing-box',
                    widgetData: {
                      config: {
                        type: 'feature-item',
                        useShortName: false,
                        treatAsCard: true,
                      },
                      actionBtn: appsConfig.features[id],
                    },
                  })
                }
                return undefined
              },
            )),
          }),
      )
    }
  }
  checkhasRole(role: string[]): boolean {
    let returnValue = false
    role.forEach(v => {
      if ((this.configSvc.userRoles || new Set()).has(v)) {
        returnValue = true
      }
    })
    return returnValue
  }
  ngOnInit() {
    this.setPinnedApps()
    if (this.widgetData) {
      if (this.widgetData.actionBtnId) {
        this.id = this.widgetData.actionBtnId
      }
      if (this.widgetData.disableViewProfile) {
        this.disableViewProfile = this.widgetData.disableViewProfile
      }
      if (this.widgetData.disableSettings) {
        this.disableSettings = this.widgetData.disableSettings
      }
      if (this.widgetData.disableAllFeatures) {
        this.disableAllFeatures = this.widgetData.disableAllFeatures
      }
    }
    if (this.featuresConfig && this.featuresConfig.length > 0) {
      this.getPortalLinks()
    }

  }

  ngOnDestroy() {
    if (this.pinnedAppsSubs) {
      this.pinnedAppsSubs.unsubscribe()
    }
  }

  logout() {
    this.dialog.open<LogoutComponent>(LogoutComponent)
  }

  setPinnedApps() {
    this.pinnedAppsSubs = this.configSvc.pinnedApps.subscribe(pinnedApps => {
      const appsConfig = this.configSvc.appsConfig
      if (!appsConfig) {
        return
      }
      this.pinnedApps = Array.from(pinnedApps)
        .filter(id => id in appsConfig.features)
        .map(id => ({
          widgetType: ROOT_WIDGET_CONFIG.actionButton._type,
          widgetSubType: ROOT_WIDGET_CONFIG.actionButton.feature,
          widgetHostClass: 'w-1/3 px-2 py-3 box-sizing-box',
          widgetData: {
            config: {
              type: 'feature-item',
              useShortName: true,
            },
            actionBtn: appsConfig.features[id],
          },
        }))
    })
  }

  getPortalLinks() {
    this.featuresConfig.forEach((feature: any) => {
      if (feature.id === 'portal_admin' && feature.featureWidgets.length > 0) {
        feature.featureWidgets.forEach((fw: any) => {
          this.portalLinks.push(fw)
        })
      }
    })
  }
}
