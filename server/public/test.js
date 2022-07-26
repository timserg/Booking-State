const logout = document.querySelector('.logout')

console.log('123');

logout.addEventListener('click', async (e) => {
  e.preventDefault()
  const response = await fetch('/logout', {
    method: 'POST'
  })
  if (response.ok) {
    window.location = '/login'
  }
})
