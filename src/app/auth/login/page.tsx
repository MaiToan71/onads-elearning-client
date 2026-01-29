import { Login } from "@/app/components/auth/login"
import { Suspense } from "react"

const page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Login/>
        </Suspense>
    )
}

export default page;