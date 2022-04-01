dropArea.addEventListener('drop', handleDrop, false)

function handleDrop(e) {
  let dt = e.dataTransfer
  let files = dt.files

  handleFiles(files)
}
function handleFiles(files) {
    ([...files]).forEach(uploadFile)
  }

  function uploadFile(file) {
    let url = ''
    let formData = new FormData()
  
    formData.append('file', file)
  
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(() => { })
    .catch(() => { })
  }

  function uploadFile(file) {
    var url = 'YOUR URL HERE'
    var xhr = new XMLHttpRequest()
    var formData = new FormData()
    xhr.open('POST', url, true)
  
    xhr.addEventListener('readystatechange', function(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        
      }
      else if (xhr.readyState == 4 && xhr.status != 200) {
        
      }
    })
  
    formData.append('file', file)
    xhr.send(formData)
  }
  
  const btn =document.querySelector('add').addEventListener('click',()=>{
    
  })