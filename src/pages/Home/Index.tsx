import Card_pro from '../Card_pro.tsx'; 


const Index = () => {
  return (
  <div>

    <section
    >
          <div>
    <img src="../../../src/assets/img/bg-img/bg11.jpg" alt="" />
    </div>
    </section>
    {/* ##### Welcome Area End ##### */}
    {/* ##### Top Catagory Area Start ##### */}
    <div className="top_catagory_area section-padding-80 clearfix">
      <div className="container">
        <div className="row justify-content-center">
          {/* Single Catagory */}
          <div className="col-12 col-sm-6 col-md-4">
            <div
              className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
              style={{ backgroundImage: "url(../../../src/assets/img/bg-img/bg-3.jpg)" }}
            >
              <div className="catagory-content">
                <a href="#">Giày da</a>
              </div>
            </div>
          </div>
          {/* Single Catagory */}
          <div className="col-12 col-sm-6 col-md-4">
            <div
              className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
              style={{ backgroundImage: "url(../../../src/assets/img/bg-img/anh2.png)" }}
            >
              <div className="catagory-content">
                <a href="#">SNEAKER</a>
              </div>
            </div>
          </div>
          {/* Single Catagory */}
          <div className="col-12 col-sm-6 col-md-4">
            <div
              className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
              style={{ backgroundImage: "url(../../../src/assets/img/bg-img/b1.png)" }}
            >
              <div className="catagory-content">
                <a href="#">Giày SanDal</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ##### Top Catagory Area End ##### */}

{/* ##### CTA Area Start ##### */}
<div className="cta-area">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div
          className="cta-content"
          style={{
            display: "flex",
            height: "100%",
          }}
        >
          {/* Hình ảnh bên trái */}
          <div
            className="cta-image"
            style={{
              width: "50%",
            }}
          >
            <img
              src="../../../src/assets/img/bg-img/1.jpg"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Nội dung bên phải */}
          <div
            className="cta-text d-flex align-items-center justify-content-end"
            style={{
              width: "50%",
              padding: "20px",
            }}
          >
            <div>
              <h6>-30%</h6>
              <h2>Giảm giá sản phẩm</h2>
              <a href="#" className="btn essence-btn">
                Mua ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* ##### CTA Area End ##### */}


    {/* ##### New Arrivals Area Start ##### */}
    <section className="new_arrivals_area section-padding-80 clearfix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2>Sản phẩm bán chạy</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
  <div className="row">
    <Card_pro /> {/* Gọi component Card_pro ở đây */}
              <Card_pro />
              <Card_pro />
              <Card_pro />
              <Card_pro />
              <Card_pro />
              <Card_pro />
              <Card_pro />
          </div>
      </div>
    </section>
    {/* ##### New Arrivals Area End ##### */}
    {/* ##### New Arrivals Area Start ##### */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2>Sản phẩm Hot</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
  <div className="row">
    <Card_pro /> {/* Gọi component Card_pro ở đây */}
              <Card_pro />
              <Card_pro />
              <Card_pro />
              <Card_pro />
              <Card_pro />
              <Card_pro />
              <Card_pro />
          </div>
      </div>
    {/* ##### New Arrivals Area End ##### */}
    {/* ##### Brands Area Start ##### */}
    <div style={{ height:"80px" }} className="brands-area d-flex align-items-center justify-content-between">
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../../../src/assets/img/core-img/1.png"  />
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../../../src/assets/img/core-img/2.png"  />
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../../../src/assets/img/core-img/3.png" />
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../../../src/assets/img/core-img/4.png" />
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../../../src/assets/img/core-img/5.png"/>
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../../../src/assets/img/core-img/6.png"  />
      </div>
    </div>
    {/* ##### Brands Area End ##### */}
    {/* ##### Footer Area Start ##### */}

  </div>
  )
}

export default Index

