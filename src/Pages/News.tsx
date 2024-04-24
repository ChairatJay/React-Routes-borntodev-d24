import { useParams } from "react-router-dom"


function News() {
  const { slug } = useParams();
  return (
    <>
      <h1>News ID: {slug}</h1>
    </>
  )
}

export default News