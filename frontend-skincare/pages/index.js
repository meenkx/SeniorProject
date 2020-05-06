import Head from 'next/head'
import Navbar from '../components/navbar'
import logobottom1 from './logo.png'

export default function Home() {
  return (
    <div className="container">
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col">
            <main style={{marginTop: "100px" , textAlign: "center"}}>
              <div className="mainPadding"></div>
              <div className="main-title">รวมทุกความเห็นไว้ที่เดียว!</div>
              <input type="text" className="mainInput"  placeholder="ชื่อผลิตภัณฑ์"></input>
              <button type="button" className="btn searchButtonMain">ค้นหา</button>
            </main>
          </div>
        </div>
        <div className="row" style={{ marginTop: "150px"}}>
          <div className="col">
            <button type="button" className="btn searchButtonMainBottom">
              <img src={logo}/>
              <p className="BottomTextPad">ดูผลิตภัณฑ์ทั้งหมด</p>
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn searchButtonMainBottom">iopiopiop</button>
          </div>
        </div>
      </div>
    </div>
  )
}
