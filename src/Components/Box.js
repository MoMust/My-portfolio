function Box({ Icon, Icon1, Icon2, Icon3, Icon4, header }) {
  return (
    <div class="box col-lg-12 col-md-12">
      <div className="box-header">
        {Icon}
        <p>{header}</p>
      </div>
      
        <div className="box-content pt-1">
          <div className="box-content-fa ">
            {Icon1}
            
          </div>
          <div className="box-content-fa">            
            {Icon2}
          </div>
          <div className="box-content-fa">
            {Icon3}
          </div>
          <div className="box-content-fa">
            {Icon4}
            
          </div>
        </div>
      
    </div>
  );
}

export default Box;
