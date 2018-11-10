Draft component stack:
- APP
    - Header item, which can change the post views
        - buttons
    - PostsView: based on type/number will make a regular or emphasized post
        - Post
            - type: is it an 'emphasized' post? (ie, on large, different than most)
            - image
            - title
            - other data, blah

TODO:
    Just added in the PostsView item, which will manage and list our items in the appropriate layout. 
    NEED TO: pass in variable or get the proper "posts" and make them look right programattically.


    PostsView should have an array of all the posts data (likely a JSON from the API later)
    It should pass individual post data items into each Post

    Therefore, each needs to take some props