import appFrame from '../components/pageFrame/appFrame'
import Mobile from '../view/mobile/mobile'
const frameRouter = [
    {
        path:'/',
        // tslint:disable-next-line:object-literal-sort-keys
        component: appFrame,
        routes: [
            {
                path: '/mobile',
                // tslint:disable-next-line:object-literal-sort-keys
                name: '主页',
                component: Mobile,
                // icon: 'udianfont udian-hangche-',
                show: true
            },
        ]
    }   
]

export default frameRouter;