/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


module egret {
    
    /**
     * @class egret.Texture
     * @classdesc 纹理类是对不同平台不同的图片资源的封装
     * 在HTML5中，资源是一个HTMLElement对象
     * 在OpenGL / WebGL中，资源是一个提交GPU后获取的纹理id
     * Texture类封装了这些底层实现的细节，开发者只需要关心接口即可
     */
    export class Texture extends HashObject{

        public constructor(){
            super();
        }

        /**
         * 已废弃，请使用_bitmapX替代
         * @deprecated
         */
        public get _startX():number{
            return this._bitmapX;
        }
        public set _startX(value:number){
            this._bitmapX = value;
        }
        /**
         * 已废弃，请使用_bitmapY替代
         * @deprecated
         */
        public get _startY():number{
            return this._bitmapY;
        }
        public set _startY(value:number){
            this._bitmapY = value;
        }
        /**
         * 已废弃，请使用_bitmapWidth替代
         * @deprecated
         */
        public get _actualWidth():number{
            return this._bitmapWidth;
        }
        public set _actualWidth(value:number){
            this._bitmapWidth = value;
        }
        /**
         * 已废弃，请使用_bitmapHeight替代
         * @deprecated
         */
        public get _actualHeight():number{
            return this._bitmapHeight;
        }
        public set _actualHeight(value:number){
            this._bitmapHeight = value;
        }


        public _bitmapX:number = 0;
        /**
         * 表示这个纹理在bitmapData上的x起始位置
         * @member {number} egret.Texture#bitmapX
         */
        public get bitmapX():number{
            return this._bitmapX;
        }

        public _bitmapY:number = 0;
        /**
         * 表示这个纹理在bitmapData上的y起始位置
         * @member {number} egret.Texture#bitmapY
         */
        public get bitmapY():number{
            return this._bitmapY;
        }
        /**
         * 表示这个纹理在bitmapData上的宽度
         */
        public _bitmapWidth:number = 0;
        /**
         * 表示这个纹理在bitmapData上的高度
         */
        public _bitmapHeight:number = 0;

        /**
         * 表示这个纹理显示了之后在x方向的渲染偏移量
         */
        public _offsetX = 0;
        /**
         * 表示这个纹理显示了之后在y方向的渲染偏移量
         */
        public _offsetY = 0;


        public _textureWidth:number = 0;
        /**
         * 纹理宽度
         * @member {number} egret.Texture#textureWidth
         */
        public get textureWidth():number {
            return this._textureWidth;
        }


        public _textureHeight:number = 0;
        /**
         * 纹理高度
         * @member {number} egret.Texture#textureWidth
         */
        public get textureHeight():number {
            return this._textureHeight;
        }
        /**
         * 表示bitmapData.width
         */
        public _sourceWidth:number;
        /**
         * 表示bitmapData.height
         */
        public _sourceHeight:number;
        /**
         * 纹理对象中得位图数据
         * @member {any} egret.Texture#bitmapData
         */
        public _bitmapData;

        public get bitmapData() {
            return this._bitmapData;
        }

        public set bitmapData(value:any) {
            var scale = egret.MainContext.instance.rendererContext.texture_scale_factor;
            this._bitmapData = value;
            this._textureWidth = value.width * scale;
            this._textureHeight = value.height * scale;
            this._bitmapWidth = this._textureWidth;
            this._bitmapHeight = this._textureHeight;
            this._sourceWidth = this._textureWidth;
            this._sourceHeight = this._textureHeight;
            this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0;
        }

        /**
         * 获取某一点像素的颜色值
         * @method egret.Texture#getPixel32
         * @param x 像素点的X轴坐标
         * @param y 像素点的Y轴坐标
         * @returns {number} 指定像素点的颜色值
         */
        public getPixel32(x,y):number[]{
            var result:any = this._bitmapData.getContext("2d").getImageData(x,y,1,1);
            return result.data;
        }
    }
}