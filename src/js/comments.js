export default () => ({
  comments: [],
  isLoading: false,
  fetchComments() {
    if (!this.comments.length) {
      this.isLoading = true;
      fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then((res) => res.json())
        .then((data) => {
          this.isLoading = false;
          this.comments = data;
        });
    } else {
      this.comments = [];
    }
  },
});
