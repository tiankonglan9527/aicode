<template>
  <div class="about">
    <div class="profile">
      <div class="avatar-container">
        <img src="https://picsum.photos/300/300?random=100" alt="个人头像" class="avatar" />
      </div>
      <div class="info">
        <h1>关于我</h1>
        <p class="title">前端开发工程师 & 技术博主</p>
      </div>
    </div>
    
    <div class="bio">
      <h2>个人简介</h2>
      <p>我是一名拥有5年前端开发经验的技术爱好者，专注于现代Web技术栈。我的技术专长包括Vue.js、React、TypeScript和响应式网页设计。</p>
      <p>我热衷于探索新技术，解决复杂问题，并将我的知识和经验分享给社区。我相信持续学习和实践是技术成长的关键。</p>
    </div>
    
    <div class="skills">
      <h2>技术栈</h2>
      <div class="skills-grid">
        <div class="skill-item">
          <h3>前端开发</h3>
          <ul>
            <li>Vue.js / React</li>
            <li>JavaScript / TypeScript</li>
            <li>HTML5 / CSS3 / Sass</li>
            <li>响应式设计</li>
          </ul>
        </div>
        <div class="skill-item">
          <h3>工具 & 平台</h3>
          <ul>
            <li>Webpack / Vite</li>
            <li>Git / GitHub</li>
            <li>Node.js / npm</li>
            <li>VS Code</li>
          </ul>
        </div>
        <div class="skill-item">
          <h3>其他技能</h3>
          <ul>
            <li>性能优化</li>
            <li>UI/UX设计原则</li>
            <li>跨浏览器兼容性</li>
            <li>SEO最佳实践</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="contact">
      <h2>联系我</h2>
      <p>如果您有任何问题或合作意向，欢迎通过以下方式联系我：</p>
      <div class="contact-methods">
        <a href="mailto:contact@example.com" class="contact-link">
          <span>邮箱: contact@example.com</span>
        </a>
        <a href="https://github.com/username" target="_blank" class="contact-link">
          <span>GitHub: github.com/username</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

.profile {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 50px;
  padding-bottom: 40px;
  border-bottom: 1px solid #eee;
}

.avatar-container {
  flex-shrink: 0;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #f0f9eb;
}

.info h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.title {
  font-size: 1.2rem;
  color: #42b983;
  font-weight: 500;
}

.bio, .skills, .contact {
  margin-bottom: 50px;
}

.bio h2, .skills h2, .contact h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #42b983;
}

.bio p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 15px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.skill-item {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.skill-item h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #42b983;
}

.skill-item ul {
  padding-left: 20px;
}

.skill-item li {
  margin-bottom: 8px;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-link {
  display: block;
  padding: 12px 20px;
  background: #f0f9eb;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  transition: background 0.3s;
}

.contact-link:hover {
  background: #e1f3d8;
}

@media (max-width: 768px) {
  .profile {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .avatar {
    width: 150px;
    height: 150px;
  }
  
  .info h1 {
    font-size: 2rem;
  }
}
</style>