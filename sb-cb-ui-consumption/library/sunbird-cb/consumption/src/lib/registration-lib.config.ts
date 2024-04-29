import { NsWidgetResolver } from '@sunbird-cb/resolver'
import { ROOT_WIDGET_CONFIG } from './consumption.config'
// Components
import { CardsComponent } from './_common/cards/cards.component'
import { CardsModule } from './_common/cards/cards.module'


export const WIDGET_REGISTERED_LIB_MODULES = [
  CardsModule
]

export const WIDGET_REGISTRATION_LIB_CONFIG: NsWidgetResolver.IRegistrationConfig[] = [
  {
    widgetType: ROOT_WIDGET_CONFIG.card._type,
    widgetSubType: ROOT_WIDGET_CONFIG.card.cardResource,
    component: CardsComponent,
  }
]
