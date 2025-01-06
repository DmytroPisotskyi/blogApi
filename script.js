
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        const post = document.querySelector('.post');
        json.forEach((item, index) => {
          console.log(item)
          //creating elements
          const postListItem = document.createElement('li');
          const postIndex = document.createElement('span');
          const postTitle = document.createElement('h4');
          const postContent = document.createElement('p');
          const postLink = document.createElement('a');
          //add className
          postListItem.classList.add('post__list-item');
          postIndex.classList.add('post-index');
          postTitle.classList.add('post__title');
          postContent.classList.add('post__content');
          postLink.classList.add('post__link')
          postLink.href = '#'
          //add content to elements
          postIndex.innerHTML = index + 1;
          postTitle.innerHTML = item.title;
          postContent.innerHTML = item.body;
          postLink.innerHTML = 'Read More'
          //add item to the list
          postListItem.append(postIndex, postTitle, postContent, postLink);
          post.appendChild(postListItem);


        })
      })


