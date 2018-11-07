export default {
  path: '/demo/frame',
  title: '内嵌网页',
  icon: 'globe',
  children: (pre => [
    { path: `${pre}azure-doc`, title: 'azureAdmin 中文文档', iconSvg: 'azure-admin' }
  ])('/demo/frame/')
}
