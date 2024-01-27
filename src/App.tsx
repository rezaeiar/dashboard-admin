import { useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import TopBar from "./components/TopBar"
import SideBar from "./components/SideBar"
import Overlay from "./components/Overlay"
import i18n from '../i18n'
import { useEffect } from "react"

const App = () => {
    useEffect(() => {
        document.body.dir = i18n.language === 'fa' ? 'rtl' : 'ltr'
    }, [])
    
    const router = useRoutes(routes)

    if (router?.props.match.pathname === '/login'
        || router?.props.match.route.path === '/*') {
        return (
            <>
                {router}
            </>
        )
    }
    return (
        <div className={`app relative`}>
            <TopBar />
            <div className="flex relative">
                <SideBar />
                {/* {router} */}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit commodi repudiandae voluptas neque nihil voluptatibus laudantium! Nisi aspernatur rerum nemo cumque sed iure ad quidem, ipsum quia, vitae natus. Quia facere quo impedit inventore mollitia doloribus quas totam! Eum voluptatibus voluptates velit veritatis facilis sed vitae dolor, mollitia enim quidem ea sint architecto ad doloremque repellat illum quisquam cupiditate quo temporibus deleniti nulla itaque asperiores. Voluptatum, fugiat quod. Hic animi unde illo soluta cumque nemo facilis accusamus odio. Vitae voluptas ducimus inventore voluptatem modi facere obcaecati odit unde nisi, ullam sapiente veritatis excepturi qui, deleniti quia atque sed mollitia nulla fugit. Quaerat illo voluptatem iure labore cupiditate alias possimus corporis tempora quo deserunt rerum magni vero perspiciatis debitis, doloribus placeat porro nisi eligendi iusto saepe quis! Nam dolore adipisci maiores iusto modi ea, dicta, dolores quis error voluptates, laboriosam molestias ad ut magni? Facere tenetur at dolores similique in non natus, qui, deleniti ratione obcaecati rem! Unde illum blanditiis porro quia temporibus animi eius iusto aspernatur voluptas cum perspiciatis officiis dolor molestias, modi quam consequuntur consequatur dignissimos doloribus facilis fugiat sed! Error fugiat eum doloremque placeat, adipisci earum omnis odit id? Temporibus voluptatem iste fuga vel perspiciatis voluptas dolorum fugiat cum, vero voluptates illum? Ipsum, iusto. Aut eaque recusandae eligendi consectetur placeat ex. Quia, non rem. Necessitatibus nisi totam labore nulla quos, mollitia voluptatum rerum obcaecati maiores sapiente numquam aut, deleniti beatae eligendi dolor. Delectus ipsum doloremque sit porro iure placeat quam aspernatur autem eveniet dolor nihil nobis vero, cupiditate nostrum nulla debitis quidem necessitatibus magnam quibusdam, voluptate corporis aliquam dolorem quod! Velit fugiat ullam sunt fugit rem, consectetur neque quae recusandae facilis praesentium alias non et voluptatum. Odit placeat id quidem perspiciatis porro repellat velit enim cupiditate modi, earum quod dignissimos adipisci aut dolore quos saepe minus, maxime tenetur!
            </div>
            {/* <Overlay /> */}
        </div>
    )
}

export default App