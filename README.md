# Thunk

### The word thunk is a programming term that means : A piece of code that does some delayed work.

# unwrap

### you can use it to check weather promise is resolved or not based on that you can send response to user. it lets you use the try catch block for a dispatch function!

# createSelector

### createSelector lets you memoize the selector

```
this function will be inside post slice file
const postsSelector = (state)=>state.posts.postData

This will give a new reference all the time because filter will return a new array all the time so to memoize this we can use createSelector!


const postForUser = useSelector((state) => {
		const allPost = postsSelector(state);
		return allPost.filter((post) => {
			return post.userId === Number(userId);
		});
	});


this functions will be inside post slice file
const postsSelector = (state)=>state.posts.postData

const getPostByUserId =createSelector(

    [postsSelector,(state,userId)=>userId],

    (posts,userId)=>post.filter(post=>post.userId ===userId)
)

const postForUser = useSelector ((state)=>getPostByUserId(state,userId))

```
