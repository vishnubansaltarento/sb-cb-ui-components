import { Inject, Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'pipePublicURL',
})
export class PipePublicURL implements PipeTransform {
  environment: any
  constructor(@Inject('environment') environment: any) {
    this.environment = environment
  }
  transform(value: string): any {
    const mainUrl = value && value.split('/content').pop() || ''
    const finalURL = `${this.environment.contentHost}/${this.environment.contentBucket}/content${mainUrl}`
    return value ? finalURL : ''
  }

}
