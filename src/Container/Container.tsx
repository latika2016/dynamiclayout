import Layout from "../Layout/Layout";

export default function Container() {
    // [7,5,4][7,5][2,1]
    const layoutDetails = [[2,2],[2,1]]
    return (<Layout details={layoutDetails}>
                <button>One</button>
                <button>Two</button>
                <button>Three</button>
                <button>Four</button>
                <button>Five</button>
                <button>Six</button>
                <button>Seven</button>
            </Layout>)
}