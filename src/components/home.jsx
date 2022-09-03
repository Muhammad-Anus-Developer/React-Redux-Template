import React from 'react'
import { connect } from 'react-redux';


const Home = (props) => {
  const {datas} = props
  console.log(datas);
  return (
    <>
    {
      datas?.movies.length !== 0 && datas?.movies.map((e,i)=>{
        return(
<div key={i}>
  <span>{e.title}</span>
  <span>{e.releaseYear}</span>
  </div>
        )
      })
    }
    </>
  )
}

const mapStateToProps = state => ({
  datas: state.data
})

export default connect(
  mapStateToProps,
)(Home)


