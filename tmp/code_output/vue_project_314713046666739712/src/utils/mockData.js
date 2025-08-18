export const blogPosts = [
  {
    id: 1,
    title: 'Vue3 组合式 API 入门指南',
    summary: '本文详细介绍了 Vue3 组合式 API 的核心概念和使用方法，帮助你快速掌握这一现代前端开发技术。',
    content: '<p>Vue3 的组合式 API 是 Vue 生态系统的一次重大革新，它提供了一种更灵活、更强大的方式来组织和复用代码逻辑。</p><p>在组合式 API 中，我们使用 setup 函数来定义组件的逻辑。setup 函数在组件创建之前执行，它接收两个参数：props 和 context。</p><p>组合式 API 的核心是响应式引用（ref）和响应式对象（reactive）。ref 用于创建基本类型的响应式数据，而 reactive 用于创建对象的响应式版本。</p><p>除了响应式系统，组合式 API 还提供了一系列生命周期钩子函数，如 onMounted、onUpdated 和 onUnmounted 等，这些钩子函数可以直接在 setup 函数中使用。</p><p>组合式 API 最大的优势在于它能够将相关的逻辑组织在一起，而不是按照选项（data、methods、computed 等）进行分离。这使得代码更易于理解和维护，特别是对于复杂的组件。</p><p>在实际开发中，我们可以将可复用的逻辑提取到组合函数中，然后在多个组件中使用。这大大提高了代码的复用性和可维护性。</p>',
    date: '2023-10-15',
    category: '前端开发',
    image: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: 2,
    title: '现代响应式网页设计实践',
    summary: '探索响应式设计的最新趋势和技术，学习如何创建在各种设备上都能完美展示的网页。',
    content: '<p>响应式网页设计已经成为现代前端开发的标配技术。它使网站能够自动适应不同设备的屏幕尺寸，提供一致的用户体验。</p><p>实现响应式设计主要依靠 CSS 媒体查询、弹性布局（Flexbox）和网格布局（Grid）。媒体查询允许我们根据设备的特性（如屏幕宽度、高度和方向）应用不同的样式。</p><p>移动优先的设计策略是当前的最佳实践。这意味着我们首先为移动设备设计样式，然后使用媒体查询为更大的屏幕添加或修改样式。</p><p>除了布局，响应式图片也是重要的考虑因素。我们可以使用 srcset 和 sizes 属性来确保浏览器下载最适合当前设备尺寸的图片。</p><p>性能优化在响应式设计中至关重要。我们应该避免在移动设备上加载不必要的资源，使用懒加载技术，并优化 CSS 和 JavaScript 文件的大小。</p>',
    date: '2023-09-28',
    category: '网页设计',
    image: 'https://picsum.photos/600/400?random=2'
  },
  {
    id: 3,
    title: 'JavaScript 异步编程深度解析',
    summary: '从回调函数到 async/await，深入理解 JavaScript 异步编程的演变和各种模式的应用场景。',
    content: '<p>JavaScript 的异步编程模式经历了从回调函数到 Promise，再到 async/await 的演进过程。理解这些模式对于编写高效、可维护的 JavaScript 代码至关重要。</p><p>回调函数是最基础的异步处理方式，但容易导致回调地狱（Callback Hell），使代码难以阅读和维护。</p><p>Promise 的出现解决了回调地狱的问题。它提供了更清晰的链式调用语法，并且可以更好地处理错误。</p><p>async/await 是建立在 Promise 之上的语法糖，它使异步代码看起来更像同步代码，大大提高了代码的可读性。</p><p>在实际开发中，我们应该根据具体情况选择合适的异步模式。对于简单的异步操作，Promise 可能就足够了；而对于复杂的异步流程，async/await 通常是更好的选择。</p>',
    date: '2023-09-10',
    category: 'JavaScript',
    image: 'https://picsum.photos/600/400?random=3'
  },
  {
    id: 4,
    title: 'CSS Grid 布局完全指南',
    summary: '掌握 CSS Grid 布局的所有特性和技巧，创建复杂而灵活的网页布局。',
    content: '<p>CSS Grid 布局是 CSS 中最强大的布局系统，它允许我们创建二维的网格布局，比传统的浮动或定位方法更加灵活和强大。</p><p>Grid 布局的核心概念包括网格容器（grid container）、网格项（grid items）、网格线（grid lines）、网格轨道（grid tracks）和网格区域（grid areas）。</p><p>我们可以使用 grid-template-columns 和 grid-template-rows 属性定义网格的列和行。这些属性接受各种单位，包括 px、%、fr（分数单位）等。</p><p>Grid 布局还提供了强大的对齐功能，通过 justify-items、align-items、justify-content 和 align-content 等属性，我们可以精确控制网格项在容器中的位置。</p><p>响应式网格设计是 Grid 布局的一大优势。我们可以结合媒体查询和 auto-fill、auto-fit 等特性，创建适应不同屏幕尺寸的布局。</p>',
    date: '2023-08-22',
    category: 'CSS',
    image: 'https://picsum.photos/600/400?random=4'
  },
  {
    id: 5,
    title: '前端性能优化最佳实践',
    summary: '20个经过验证的前端性能优化技巧，帮助你显著提升网站加载速度和用户体验。',
    content: '<p>前端性能优化是提升用户体验的关键因素。一个加载迅速的网站不仅能提高用户满意度，还能改善 SEO 排名。</p><p>资源压缩是最基本的优化手段。我们应该压缩 HTML、CSS 和 JavaScript 文件，优化图片大小，并使用现代图片格式如 WebP。</p><p>减少 HTTP 请求次数也很重要。我们可以通过合并文件、使用 CSS 雪碧图、内联关键 CSS 等技术来实现。</p><p>懒加载非关键资源可以显著提高首屏加载速度。图片、视频和某些 JavaScript 模块都可以延迟加载。</p><p>利用浏览器缓存是另一个重要策略。我们可以设置合适的缓存头，使用 Service Workers 实现离线缓存，并考虑使用 CDN 分发静态资源。</p>',
    date: '2023-08-05',
    category: '性能优化',
    image: 'https://picsum.photos/600/400?random=5'
  },
  {
    id: 6,
    title: 'TypeScript 在 Vue3 中的应用',
    summary: '如何在 Vue3 项目中集成 TypeScript，提高代码质量和开发效率。',
    content: '<p>TypeScript 为 JavaScript 添加了静态类型系统，可以显著提高代码的可维护性和开发效率。在 Vue3 中使用 TypeScript 可以获得更好的开发体验。</p><p>Vue3 本身是用 TypeScript 重写的，因此对 TypeScript 的支持非常完善。我们可以使用 defineComponent 函数来定义组件，这提供了更好的类型推断。</p><p>在组合式 API 中，我们可以使用 ref 和 reactive 创建响应式数据，并通过泛型参数指定数据类型。</p><p>Props 的类型定义是 TypeScript 在 Vue 中的重要应用。我们可以使用 PropType 工具类型来定义复杂的 prop 类型。</p><p>为了获得最佳的类型支持，我们应该使用 Vue 的官方扩展 Volar，它提供了强大的 TypeScript 语言服务。</p>',
    date: '2023-07-18',
    category: 'TypeScript',
    image: 'https://picsum.photos/600/400?random=6'
  }
]