/**
 * 单例模式（Singleton）
 */
const __single = Symbol('single');

export default class Singleton {
	constructor(single){
		if(single != __single){
			throw new Error('Singleton is a singleton.');
		}
		this._instance = null;
		this.init();
	}
	init(){
		this.value = 'singleton';
		//...
	}
	toString(){
        console.log(this.value);
    }
	static getInstance(){
		return this._instance || (this._instance = new Singleton(__single))
	}
}