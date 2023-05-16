import { useRouter } from "next/router"
export default function Doc() {
    const router = useRouter();
    const { params = [] } = router.query;
    return (
        <h1>Docs Home Page : {params[0] ? params[0]+"," : ''}{params[1]} </h1>
    )
}
