import { definePlugin, Plugin  } from 'mushin'

/*
  1. Default Plugin
    * name
    * package.json
    * event
      * onMessage(()=>{  })
      * sendMessage(()=>{  })


*/

/*
  1. 我引入所有的插件(是否开启新的进程？)
  2. 我需要一个主程序的生命周期 (beforeStart, start, beforeDestroy, destroy)
  3. 我需要一个插件的生命周期 (beforeInstall, install, beforeUpdate, update, beforeUninstall, uninstall)
  4. 我需要一个插件的配置 (config)
  5.

  适配器: qq, qq-guild
  主程序通过适配器的东西
*/


export const name = 'plugin-1'

export const install = async () => {

}

export class MyPlugin extends Plugin{
  constructor(){
    super()
  }


  onMessage(event: any){
    if(event.message === 'hello'){
      // this.sendMessage('hello')
      // this.sendMessage({message: 'hello', type: 'text'})
    }
  }




}

export default new Plugin()

// defineCommand('pattern').reply('2').reply('1').wait(()=>{})
