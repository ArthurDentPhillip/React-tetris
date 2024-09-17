const Menu = ({onClick}) => 
    <div className="Menu row">
      <div className="col-4">
          <div className="PreviewCopy PreviewCopyOne"></div>
          <div className="PreviewCopy PreviewCopyTwo"></div>
          <div className="PreviewCopy PreviewCopyThree"></div>
        </div>
        <div className="col-4">
          <div className="BoardCopy" style={{marginLeft: "-80px !important"}}></div>
        </div>
        <div className="col-4 row">
          <div className="col-12" style={{paddingLeft: '1.2%', marginTop: '-61.3%'}}>
            <ul className="GameStatsCopy GameStatsCopy__right">
              <li>Level</li>
              <li className="value">0</li>
              <li>Lines to level</li>
              <li className="value">0</li>
              <li>Points</li>
              <li className="value">0</li>
            </ul>
          </div>
          <div className="col-12" style={{ marginTop: '-20%'}}>
            <button className="Button" onClick={onClick}><p>Play</p></button>
          </div>
        </div>
    </div>


export default Menu;