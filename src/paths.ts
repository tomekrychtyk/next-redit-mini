const paths = {
  home() {
    return "/";
  },

  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },

  postCreate(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },

  postShow(topicSlug: string, id: string) {
    return `/topics/${topicSlug}/posts/${id}`;
  },
};

export default paths;
