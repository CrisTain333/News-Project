let pageNumber = '1';
const getData = ()=>{
  let pageNumber = '1';
    const container = document.getElementById('appendElement');
    const input = document.getElementById('inputFeild')
    const inputValue = input.value;
  const pageid  =  document.getElementById('PageId');
  const pageIdToString = pageid.innerText;
  const Page = parseInt(pageIdToString);
  Page.innerText = pageNumber;



    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '6a48666bbemsh0caf40fd208c4ebp1f6116jsn6ef63e5523f2',
          'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
      };
      fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${inputValue}&pageNumber=${pageNumber}&pageSize=48&autoCorrect=true`, options)
        .then(response => response.json())
        .then(data => {
          console.log(data.value);
          const html = data.value.map(e => {
            return `
          <div class="col-lg-4 mt-3">
          <div class="card" style="width: 18rem;">
          <img src="${e.url}" class="card-img-top" alt="Image Problem In Api">
          <div class="card-body">
         <h5 class="card-title">${e.title.slice(0,20)}</h5>
         <a href="${e.webpageUrl}" target="_blank" class="btn btn-primary">Web Page</a>
           </div>
          </div>
        </div>
        `
          }).join("");
          container.innerHTML = html;
        })
        .catch(err => console.error(err));
}
const next = ()=>{
  // const container = document.getElementById('appendElement');
  let pagenumberString = parseInt(pageNumber);
  let page = pagenumberString + 1;
  let againToString = page.toString();
  pageNumber = againToString;


  const pageid  =  document.getElementById('PageId');
  pageid.innerText = pageNumber;

  console.log(pageNumber);
  const container = document.getElementById('appendElement');
  const input = document.getElementById('inputFeild')
  const inputValue = input.value;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6a48666bbemsh0caf40fd208c4ebp1f6116jsn6ef63e5523f2',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
  };

  fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${inputValue}&pageNumber=${pageNumber}&pageSize=48&autoCorrect=true`, options)
    .then(response => response.json())
    .then(data => {
      console.log(data.value);
      const html = data.value.map(e => {
        return `
      <div class="col-lg-4 mt-3">
      <div class="card" style="width: 18rem;">
      <img src="${e.url}" class="card-img-top" alt="Image Problem In Api">
      <div class="card-body">
     <h5 class="card-title">${e.title}</h5>
     <a href="${e.webpageUrl}" class="btn btn-primary">Web Page</a>
       </div>
      </div>
    </div>

    `
      }).join("");
      container.innerHTML = html;
    })
    .catch(err => console.error(err));
}

const back  = () => {
    let pagenumberString = parseInt(pageNumber);
    let page = pagenumberString - 1;
    let againToString = page.toString();
     pageNumber = againToString;

     const pageid  =  document.getElementById('PageId');
     pageid.innerText = pageNumber;
     
     console.log(pageNumber);
     const container = document.getElementById('appendElement');
     const input = document.getElementById('inputFeild')
     const inputValue = input.value;
     const options = {
         method: 'GET',
         headers: {
           'X-RapidAPI-Key': '6a48666bbemsh0caf40fd208c4ebp1f6116jsn6ef63e5523f2',
           'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
         }
       };
     
       fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${inputValue}&pageNumber=${pageNumber}&pageSize=48&autoCorrect=true`, options)
         .then(response => response.json())
         .then(data => {
        //    console.log(data.value);
           const html = data.value.map(e => {
             // console.log(e);
            
             return `
           <div class="col-lg-4 mt-3">
           <div class="card" style="width: 18rem;">
           <img src="${e.url}" class="card-img-top" alt="Image Problem In Api">
           <div class="card-body">
          <h5 class="card-title">${e.title}</h5>
          <a href="${e.webpageUrl}" target="_blank" class="btn btn-primary">Web Page</a>
            </div>
           </div>
         </div>
         `
           }).join("");
           container.innerHTML = html;
         })
         .catch(err => console.error(err));
}

document.getElementById('searchBtn').addEventListener('click',(e)=>{
e.preventDefault();
getData();
})
document.getElementById('nextBtn').addEventListener('click',()=>{

  next();
})
document.getElementById('backBtn').addEventListener('click',()=>{
    back();
})