const year = {
  change (content) {
    const year = new Date().getFullYear()
    content.innerHTML = year
  }
}

export default year
