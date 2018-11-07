import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/demo/frame',
  name: 'demo-frame',
  meta,
  redirect: { name: 'demo-frame-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'azure-doc', name: `${pre}azure-doc`, component: () => import('@/pages/demo/frame/azure-doc'), meta: { ...meta, title: 'azureAdmin 中文文档' } }
  ])('demo-frame-')
}
