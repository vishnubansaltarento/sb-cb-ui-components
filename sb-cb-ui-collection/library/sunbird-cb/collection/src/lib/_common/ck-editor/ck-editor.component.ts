// tslint:disable-next-line: max-line-length
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { AUTHORING_CONTENT_BASE, CONTENT_BASE_STATIC, CONTENT_BASE_STREAM, CONTENT_BASE_WEBHOST, CONTENT_BASE_WEBHOST_ASSETS } from './constants/apiEndpoints'
import { NOTIFICATION_TIME } from './constants/constant'
import { Notify } from './constants/notificationMessage'
import { FILE_MAX_SIZE, IMAGE_MAX_SIZE, IMAGE_SUPPORT_TYPES } from './constants/upload'
import { NotificationComponent } from './components/notification/notification.component'
import { AccessControlService } from './services/access-control.service'
import { UploadService } from './services/upload.service'
import { ConfigurationsService } from '@sunbird-cb/utils'
import { Subscription } from 'rxjs'
import { LoaderService } from './services/loader.service'

declare const CKEDITOR: any

@Component({
  selector: 'ws-widget-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.scss'],
})
export class CkEditorComponent implements AfterViewInit, OnInit, OnDestroy {

  downloadRegex = new RegExp(`(https://.*?/content-store/.*?)(\\\)?\\\\?['"])`, 'gm')
  uploadRegex = new RegExp(`${AUTHORING_CONTENT_BASE}(.*?)(\\\)?\\\\?['"])`, 'gm')
  @Input() doRegex = true
  html = ''
  @Input() set content(value: string) {
    this.html = this.doRegex ? value.replace(this.downloadRegex, this.regexDownloadReplace) : value
  }
  @Input() basic = false
  @Input() id = ''
  @Input() location:
    | typeof CONTENT_BASE_STATIC
    | typeof CONTENT_BASE_STREAM
    | typeof CONTENT_BASE_WEBHOST
    | typeof CONTENT_BASE_WEBHOST_ASSETS = CONTENT_BASE_WEBHOST_ASSETS
  @Output() value = new EventEmitter<string>()
  config: any
  @ViewChild('editor') editor!: any
  @ViewChild('uploadImage') image!: ElementRef
  imageName = 'Insert Image'
  @ViewChild('uploadFile') file!: ElementRef
  fileName = 'Upload File'
  @ViewChild('addBlank') blank!: ElementRef
  blankName = 'Add Blank'
  timer: any
  subscription!: Subscription
  constructor(
    private snackBar: MatSnackBar,
    private uploadService: UploadService,
    private configurationSvc: ConfigurationsService,
    private accessControlSvc: AccessControlService,
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    if (this.basic) {
      this.initiateBasicConfig()
    } else {
      this.initiateConfig()
    }

    this.makeTargetAsBlank()
    this.allowAdditionalContents()
    this.configurationSvc.prefChangeNotifier.subscribe(() => {
      const theme = this.theme
      if (this.config && this.config.uiColor !== theme) {
        this.config.uiColor = theme
        this.editor.instance.setUiColor(this.theme)
      }
    })
  }

  regexUploadReplace(_str = '', group1: string, group2: string): string {
    return `${decodeURIComponent(group1)}${group2}`
  }

  regexDownloadReplace(_str = '', group1: string, group2: string): string {
    return `${AUTHORING_CONTENT_BASE}${encodeURIComponent(group1)}${group2}`
  }

  initiateConfig() {
    this.config = {
      skin: 'moono',
      uiColor: this.theme,
      language: this.accessControlSvc.locale,
      toolbarGroups: [
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'editing', groups: ['find', 'selection', 'editing'] },
        { name: 'links', groups: ['links'] },
        { name: 'insert', groups: ['insert'] },
        '/',
        { name: 'styles', groups: ['styles'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'tools', groups: ['tools'] },
      ],
      allowedContent: true,
      extraAllowedContent: 'a[!href,download,document-href,class]',
      removeButtons:
        'Cut,Copy,Paste,PasteText,PasteFromWord,Save,NewPage,Preview,Print,' +
        'Templates,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,HiddenField,ImageButton' +
        ',Smiley,PageBreak,Flash,About,CreateDiv,Anchor,SelectAll,Image',
      disableNativeSpellChecker: true,
      removeDialogTabs: 'image:advanced;link:advanced',
      format_tags: 'p;h1;h2;h3;h4;h5;h6;div',
      forcePasteAsPlainText: false,
      image2_alignClasses: ['image-align-left', 'image-align-center', 'image-align-right'],
      image2_captionedClass: 'image-captioned',
      stylesSet: [
        {
          name: 'Narrow image',
          type: 'widget',
          widget: 'image',
          attributes: { class: 'image-narrow' },
        },
        {
          name: 'Wide image',
          type: 'widget',
          widget: 'image',
          attributes: { class: 'image-wide' },
        },
      ],
    }
  }
  initiateBasicConfig() {
    this.config = {
      skin: 'moono',
      uiColor: this.theme,
      language: this.accessControlSvc.locale,
      toolbarGroups: [
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'editing'] },
        { name: 'links', groups: ['links'] },
        { name: 'insert', groups: ['insert', 'colors', 'tools'] },
        '/',
      ],
      allowedContent: true,
      extraAllowedContent: 'a[!href,download,document-href,class]',
      // removeDialogTabs = '';
      removeButtons:
        'Iframe,Cut,Copy,Paste,PasteText,PasteFromWord,Save,NewPage,Preview,Print,' +
        'Templates,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,HiddenField,ImageButton' +
        ',Smiley,Flash,About,CreateDiv,Anchor,SelectAll,Image',
      disableNativeSpellChecker: true,
      removeDialogTabs: 'image:advanced;link:advanced',
      format_tags: 'p;h1;h2;h3;h4;h5;h6;div',
      forcePasteAsPlainText: false,
      image2_alignClasses: ['image-align-left', 'image-align-center', 'image-align-right'],
      image2_captionedClass: 'image-captioned',
      stylesSet: [
        {
          name: 'Narrow image',
          type: 'widget',
          widget: 'image',
          attributes: { class: 'image-narrow' },
        },
        {
          name: 'Wide image',
          type: 'widget',
          widget: 'image',
          attributes: { class: 'image-wide' },
        },
      ],
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
    this.cdr.detach()
  }

  ngAfterViewInit() {
    this.imageName = this.image.nativeElement.innerHTML
    this.fileName = this.file.nativeElement.innerHTML
    this.blankName = this.blank.nativeElement.innerHTML
    this.cdr.detectChanges()
  }

  onContentChanged() {
    this.value.emit(
      this.doRegex ? this.html.replace(this.uploadRegex, this.regexUploadReplace) : this.html,
    )
  }

  makeTargetAsBlank() {
    CKEDITOR.on('dialogDefinition', (ev: any) => {
      try {
        const dialogName = ev.data.name
        const dialogDefinition = ev.data.definition
        if (dialogName === 'link') {
          const informationTab = dialogDefinition.getContents('target')
          const targetField = informationTab.get('linkTargetType')
          targetField['default'] = '_blank'
        }
      } catch (exception) {
        // //console.log('Error ' + ev.message)
      }
    })
  }

  allowAdditionalContents() {
    CKEDITOR.dtd['a']['div'] = 1
    CKEDITOR.dtd['a']['p'] = 1
    CKEDITOR.dtd['a']['i'] = 1
    CKEDITOR.dtd['a']['span'] = 1
  }

  addImageUploadBtn() {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', IMAGE_SUPPORT_TYPES.toString())
    input.style.display = 'none'
    input.addEventListener(
      'change',
      (e: any) => {
        const file = e.target.files[0]
        if (file) {
          const fileExtension = file.name.toLowerCase().split('.')
          if (IMAGE_SUPPORT_TYPES.indexOf(`.${fileExtension[fileExtension.length - 1]}`) > -1) {
            if (file.size > IMAGE_MAX_SIZE) {
              this.snackBar.openFromComponent(NotificationComponent, {
                data: {
                  type: Notify.SIZE_ERROR,
                },
                duration: NOTIFICATION_TIME * 1000,
              })
              input.remove()
              return
            }
            const form = new FormData()
            form.set('content', file, file.name.replace(/[^A-Za-z0-9.]/g, ''))
            this.loaderService.changeLoad.next(true)
            this.uploadService
              .upload(form, { contentId: this.id, contentType: this.location })
              .subscribe(
                data => {
                  if (data.code) {
                    let url = data.artifactURL
                    if (!this.doRegex) {
                      url = `/${url
                        .split('/')
                        .slice(3)
                        .join('/')}`
                    }
                    this.editor.instance.insertHtml(
                      `<img alt='' src='${AUTHORING_CONTENT_BASE}${encodeURIComponent(
                        url,
                      )}'></img>`,
                    )
                    this.snackBar.openFromComponent(NotificationComponent, {
                      data: {
                        type: Notify.UPLOAD_SUCCESS,
                      },
                      duration: NOTIFICATION_TIME * 1000,
                    })
                    input.remove()
                    this.loaderService.changeLoad.next(false)
                  }
                },
                () => {
                  this.loaderService.changeLoad.next(false)
                  this.snackBar.openFromComponent(NotificationComponent, {
                    data: {
                      type: Notify.UPLOAD_FAIL,
                    },
                    duration: NOTIFICATION_TIME * 1000,
                  })
                  input.remove()
                },
              )
          } else {
            this.snackBar.openFromComponent(NotificationComponent, {
              data: {
                type: Notify.INVALID_FORMAT,
              },
              duration: NOTIFICATION_TIME * 1000,
            })
            input.remove()
            return
          }
        }
      },
      false,
    )
    document.body.appendChild(input)
    input.click()
  }

  addFileUploadBtn() {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', '.zip')
    input.style.display = 'none'
    input.addEventListener(
      'change',
      (e: any) => {
        const file = e.target.files[0]
        if (file) {
          if (file.name.toLowerCase().endsWith('.zip')) {
            if (file.size > FILE_MAX_SIZE) {
              this.snackBar.openFromComponent(NotificationComponent, {
                data: {
                  type: Notify.SIZE_ERROR,
                },
                duration: NOTIFICATION_TIME * 1000,
              })
              input.remove()
              return
            }
            const form = new FormData()
            form.set('content', file, file.name.replace(/[^A-Za-z0-9.]/g, ''))
            this.loaderService.changeLoad.next(true)
            this.uploadService
              .upload(form, { contentId: this.id, contentType: this.location })
              .subscribe(
                data => {
                  if (data.code) {
                    let url = data.artifactURL
                    if (this.doRegex) {
                      url = `/${url
                        .split('/')
                        .slice(3)
                        .join('/')}`
                    }
                    this.editor.instance.insertHtml(
                      `<a href='${url}' download>Click here to download</a>`,
                    )
                    this.snackBar.openFromComponent(NotificationComponent, {
                      data: {
                        type: Notify.UPLOAD_SUCCESS,
                      },
                      duration: NOTIFICATION_TIME * 1000,
                    })
                    input.remove()
                    this.loaderService.changeLoad.next(false)
                  }
                },
                () => {
                  this.loaderService.changeLoad.next(false)
                  this.snackBar.openFromComponent(NotificationComponent, {
                    data: {
                      type: Notify.UPLOAD_FAIL,
                    },
                    duration: NOTIFICATION_TIME * 1000,
                  })
                  input.remove()
                },
              )
          } else {
            input.remove()
            this.snackBar.openFromComponent(NotificationComponent, {
              data: {
                type: Notify.INVALID_FORMAT,
              },
              duration: NOTIFICATION_TIME * 1000,
            })
            return
          }
        }
      },
      false,
    )
    document.body.appendChild(input)
    input.click()
  }

  addBlankBtn() {
    this.editor.instance.insertHtml(' <input style="border-style:none none solid none"> ')
  }

  get theme(): string {
    const color = (getComputedStyle(document.body as any).backgroundColor as any)
      .replace('rgba', '')
      .replace('rgb', '')
      .replace('(', '')
      .replace(')', '')
      .split(',')
    return (
      // tslint:disable-next-line: prefer-template
      '#' +
      ('0' + parseInt(color[0], 10).toString(16)).slice(-2) +
      ('0' + parseInt(color[1], 10).toString(16)).slice(-2) +
      ('0' + parseInt(color[2], 10).toString(16)).slice(-2)
    )
  }

}
