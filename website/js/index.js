function storyShortener (story) {
    var storyLength = story.length;
    if (storyLength > 200) {
        var shortStory = story.substring(0, 200);
        return shortStory;
    };
};
