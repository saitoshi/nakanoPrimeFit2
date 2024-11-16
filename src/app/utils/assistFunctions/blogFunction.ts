/**
 * @name All of the functions related to blog features
 */

/**
 * @name getBlogs
 * @desc A function that calls all of the blog related API and returns all of the blogs available
 * @return blogLists
 */
export async function getBlogs() {
  try {
    const blogResponses = await fetch('api/blog', {
      method: 'GET',
    });

    const blogData = await blogResponses.json();
    await console.log(blogData['blogs']);
    return blogData['blogs'];
  } catch (error) {
    return error;
  }
}

/**
 * @name getBlog
 * @param _id
 * @desc Gets the blog detail based on the _id
 * @return specific blog info
 */
export async function getBlog(_id: string) {
  try {
    const blogResponse = await fetch('api/blog/' + { _id }, {
      method: 'GET',
    });
    const blogData = await blogResponse.json();
    return blogData;
  } catch (error) {}
}
