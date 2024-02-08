class TrendingBlogsData {
    constructor() {
      this.blogs = [
        {
          id: 1,
          imageUrl: '/developer.jpg',
          categories: ['Business', 'Travel'],
          date: 'July 2, 2020',
          title: 'Your most unhappy customers are your greatest source of learning.',
          summary: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
          authorName: 'Sergy Campbell',
          authorTitle: 'CEO and Founder',
          authorImageUrl: '/developer.jpg'
        },
        {
            id: 2,
            imageUrl: '/developer.jpg',
            categories: ['Business', 'Travel'],
            date: 'July 2, 2020',
            title: 'Your most unhappy customers are your greatest source of learning.',
            summary: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            authorName: 'Sergy Campbell',
            authorTitle: 'CEO and Founder',
            authorImageUrl: '/developer.jpg'
          },
          {
            id: 3,
            imageUrl: '/developer.jpg',
            categories: ['Business', 'Travel'],
            date: 'July 2, 2020',
            title: 'Your most unhappy customers are your greatest source of learning.',
            summary: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            authorName: 'Sergy Campbell',
            authorTitle: 'CEO and Founder',
            authorImageUrl: '/developer.jpg'
          }
      ];
    }
  
    getAllBlogs() {
      return this.blogs;
    }
  
    getBlogById(id) {
      return this.blogs.find(blog => blog.id === id);
    }
  
    // You can add more methods as needed to manipulate your blogs data.
  }
  
  export default new TrendingBlogsData(); // Export an instance
  