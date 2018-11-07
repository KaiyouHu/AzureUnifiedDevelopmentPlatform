import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({ // this.$server + '/SoftwareArchitectureDesign/login'
    url: 'http://localhost:8080' + '/SoftwareArchitectureDesign/login', //  '/login ',
    method: 'post',
    data
  })
}
