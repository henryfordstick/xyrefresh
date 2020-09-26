import marked from 'marked'
import highlight from 'highlight.js'

class Markdown {
  private rendererMD: marked.Renderer;
  constructor() {
    this.rendererMD = new marked.Renderer();
    // @ts-ignore
    marked.setOptions({
      renderer: this.rendererMD,
      headerIds: false, // 如果为真，则在发出标题(h1、h2、h3等)时包含id属性。
      gfm: true, // 允许 GitHub标准的markdown
      breaks: false, // 允许回车换行。该选项要求 gfm 为true。
      pedantic: false, // 尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
      sanitize: false, // 将忽略任何已经输入的html代码（标签
      smartLists: true, // 使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉.
      smartypants: false, // 使用更为时髦的标点，比如在引用语法中加入破折号.
      highlight: function(code: any){
        return highlight.highlightAuto(code).value
      }
    })
  }

  marked(data: string){
    if(data){
      return marked(data);
    } else {
      return null;
    }
  }
}

const markdown = new Markdown();

export default markdown;