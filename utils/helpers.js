module.exports = {
    make_date: (date) => {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`; 
    }
}