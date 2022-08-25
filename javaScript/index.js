let pageNumber = '1';
const getData = () => {
  const container = document.getElementById('appendElement');
  const input = document.getElementById('inputFeild')
  const inputValue = input.value;


  const h1 = document.getElementById('newsOf');
  h1.innerText = inputValue


  fetch(`
      https://newsapi.org/v2/everything?q=${inputValue}&from=2022-07-25&sortBy=publishedAt&language=en&pageSize=99&apiKey=4d2b67e68d3541f89cf4311152a33577`)
    .then(response => response.json())
    .then(data => {
      const html = data.articles.map(e => {
        return `
          <div class="col-lg-4 col-12 mt-3">
          <div class="card bg-dark border border-info" style="width: 18rem;">
          <img src="${e.urlToImage}" class="card-img-top text-white" alt="Image Problem In Api">
          <div class="card-body">
         <h5 class="card-title text-white">${e.title.slice(0, 20)}</h5> 
         <p class="card-text text-white">${e.description.slice(0,20)}  <a href="${e.url}" target="_blank" class="">...Read More</a></p>
           </div>
          </div>
        </div>
        `
      }).join("");
      container.innerHTML = html;
    })
    .catch(err => console.error(err));
  input.value = "";
}


document.getElementById('searchBtn').addEventListener('click', (e) => {
  e.preventDefault();
  getData();
})
{/* <a href="${e.url}" target="_blank" class="btn btn-primary">Web Page</a> */ }