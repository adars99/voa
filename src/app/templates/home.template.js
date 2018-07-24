const html = (literal, ...cooked) => {
    let result = '';
    cooked.forEach((cook, i) => {
      let lit = literal[i];
      if (Array.isArray(cook)) {
        cook = cook.join('');
      }
      result += lit;
      result += cook;
    });
    result += literal[literal.length - 1];
    return result;
  };
  
  const controls = data => {
    return html`
     ${header(data)}
      <div class="main-container">
        <div class="order-container">
            <div class="home-link">
          
                    <div class="sub-home-link"><a href="/#submitorder">Submit Order Screen</a></div>
                    <div class="sub-home-link"><a href="/#orderresend">Order Pending Screen</a></div>
                    <div class="sub-home-link"><a href="/#ordercomplete">Order Completed Screen</a></div>
             
              </div>
            </div>
           
      </div>
    `;
  };
  
  const footer = data => html ` <div class="em-footer-container em-footer-right">
    <button type="button" class="em-ds-button em-ds-button-primary" onclick="${data.event.cancelOrder}">Cancel</button>
  </div>`
  const header = data =>
  
    html` <div class="em-header">
    <div class="em-header-nav em-title-header">
        <div class="header-title">
            <label>View Order - Verification of Deposit</label>
        </div>
        <div class="header-info-status">
            <label class="status-label">Status:</label>
            <label class="status-content">Completed</label>
        </div>
    </div>
    <div class="em-header-nav em-logo-header">
        <div id="headerLogo" class="header-logo-container">Provider name/logo here</div>
        <div class="header-info-container">
            <div id="headerNavLinks"><a class="header-links" href="http://www.elliemae.com" target="_blank">Provider Info</a></div>
        </div>
    </div>
  
  
  </div>`;
  
  const HomeTemplate = data => html`
  
      ${controls(data)}
      ${footer(data)}
      
  `;
  
  export { HomeTemplate };