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
    console.log("data", data);
  
    return html`
     ${header(data)}
      <div class="main-container">
        <div class="order-container">
            <div class="order-column">
              <label>Account History </label>
              <div class="dropdown-container"> 
                <select class="em-dropdown">
                    <option class="dropdown-option" value="30">30 days</option>
                    <option class="dropdown-option" value="90">90 days</option>
                    <option class="dropdown-option" value="180">6 months</option>
                    <option class="dropdown-option" value="365">1 Year</option>
                </select>
                <span class="em-icon-chevron-down">
                  <svg version="1.1" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 129 129" 
                      xmlns:xlink="http://www.w3.org/1999/xlink" 
                      enable-background="new 0 0 129 129">
                    <g>
                      <path fill="#2080c3" 
                      d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 
                      0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div class="order-column">
                <label>Borrower</label>
                <div>Syndey Crosby</div>
            </div>
            <div class="order-column">
              <label>Email Address </label>
              <div class="dropdown-container"> 
                <select class="em-dropdown">
                    <option class="dropdown-option" value="30">Home: syd.crosby@abc.com</option>
                    <option class="dropdown-option" value="90">Work: syd.crosby@abc.com</option>
                </select>
                <span class="em-icon-chevron-down">
                  <svg version="1.1" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 129 129" 
                      xmlns:xlink="http://www.w3.org/1999/xlink" 
                      enable-background="new 0 0 129 129">
                    <g>
                      <path fill="#2080c3" 
                      d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 
                      0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div class="order-column">
                <label>Status</label>
                <div>Pending</div>
            </div>
            <div class="order-column">
                <label>Date</label>
                <div>02/06/2018</div>
            </div>
            <div class="order-column resend-column">
                <button type="button" class="em-ds-button em-ds-button-default em-ds-button-lg">Resend</button>
            </div>
        </div>
      </div>
    `;
  };
  
  const footer = data => html ` <div class="em-footer-container em-footer-right">
    <button type="button" class="em-ds-button em-ds-button-primary em-btn-cancel" onclick="${data.event.submitOrder}">Done</button>
  </div>`
  const header = data =>
  
    html` <div class="em-header">
    <div class="em-header-nav em-title-header">
        <div class="header-title">
            <label>View Order - Verification of Deposit</label>
        </div>
        <div class="header-info-status">
            <label class="status-label">Status:</label>
            <label class="status-content">Pending</label>
        </div>
    </div>
    <div class="em-header-nav em-logo-header">
        <div id="headerLogo" class="header-logo-container">Provider name/logo here</div>
        <div class="header-info-container">
            <div id="headerNavLinks"><a class="header-links" href="http://www.elliemae.com" target="_blank">Provider Info</a></div>
        </div>
    </div>
  <div class="em-sub-header"><h4>Order Information</h4></div>
  
  </div>`;
  
  const OrderResendTemplate = data => html`
  
      ${controls(data)}
      ${footer(data)}
      
  `;
  
  export { OrderResendTemplate };