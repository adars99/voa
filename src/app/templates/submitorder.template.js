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
    <div class="main-container">
      <div class="sub-header">
        <label>Account History</label>
        <select>
          <option value="30">30 days</option>
          <option value="90">90 days</option>
          <option value="180">6 months</option>
          <option value="365">1 Year</option>
        </select>
      </div>
   <div class="datatable">
      <table class="rtable">
      <thead>
        <tr >
                <th>BORROWER</th>
                <th>EMAIL ADDRESS</th>
                <th>STATUS</th>
                <th>DATE SENT</th>
                <th>ACTION</th>
                <th>RECEIVED DOCS</th>
            </tr>
        </thead>
        <tbody>
        ${data.days.map(data => tablerows(data))}
           </tbody>
           </table>

       
</div>
    </div>
  `;
};

const tablerows = data => html`
     <tr>
                <td>Sydney Crosby</td>
                <td>
                <select>
                  <option value="syd.crosby@abc.com">syd.crosby@abc.com</option>
                  <option value="ann.jones@abc.com">ann.jones@abc.com</option>
                </select>
                </td>
                <td>Completed</td>
                <td>05/31/2018</td>
                <td><input type="checkbox" id="action" name="feature" value="Refresh Report" /></td>
                <td>document</td>
            </tr>
`;

const SubmitOrderTemplate = data => html`
    ${controls(data)}
    
`;

export { SubmitOrderTemplate };