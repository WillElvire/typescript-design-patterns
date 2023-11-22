/************************************************************************* */
/*                     SINGLE REPONSABILITY PRINCIPLE                      */
/************************************************************************* */


class User {
  constructor(name: string, email: string) {}
}

class UserAuthentication {
  constructor(user: User) {}
  authenticate(password: string) {}
}

class BlogPost {
  title: string;
  content: string;
  contents: string;

  constructor(title: string, content: string) {
    this.content = content;
    this.title = title;
  }

  createPost() {}

  updatePost() {}

  deletePost() {}
}

class BlogPostDisplay {
  constructor(public blog: BlogPost) {}
  displayBlogPost() {
    return `<h1>${this.blog.content}</h1>`;
  }
}
