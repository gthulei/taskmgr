# Taskmgr
 
 ```
  npm install -g @angular/cli  全局
  ng new taskManager -si --style=scss     新建项目
  ng serve                                启动服务
  ng build -prod                          最小化打包
  ng g c my-new-component                 新建组件
  ng g d my-new-directive                 新建指令
  ng g e my-new-enum                      新建枚举
  ng g m my-new-module                    新建模块
  ng g p my-new-pipe                      新建管道
  ng g s my-new-service                   新建服务
 ```
# 组件生命周期
```
  这个顺序是按照执行的先后排列的
  constructor：构造器函数，一般用于注入服务
  ngOnChanges：检测到输入数据变化，首次触发发生在ngOnInit前。注意对象的属性发生变化时监听不到
  ngOnInit：组件初始化，通常会设置一些初始值
  ngDoCheck：手动触发更新检查 
  ngAfterContentInit：内容初始化到组件之后
  ngAfterContentChecked：内容变更检测之后
  ngAfterViewInit：视图 初始化之后
  ngAfterViewChecked：视图发生变化检测之后，这个可以用来保证用户视图的及时更新
  ngOnDestroy：组件注销时的清理工作，通常用于移除事件监听，退订可观察对象等
```
# @Output @Input子父传参数,方法调用
* @Output 接受父组件方法
* @Input  接受父组件参数
```
 父组件
 @Component({
  selector: 'app-father',
  template: 
  `<div>
    <app-child [v]="arr" (toggle)="toggle()"></app-child>
   </div>
  `,
})
export class FatherComponent {
  public arr:Array<number> = [1,2,3,4];
  toggle(){
    console.log("father-toggle");
  }
}

 子组件
 @Component({
  selector: 'app-child',
  template: 
  `
  <div>
    <ul>
      <li *ngFor="let item of arr">
        {{item}}
      </li>
    <ul>
    <button (click)="btn()">btn</button>
  </div>
  `,
})
export class ChildComponent {
  接受父组件方法
  @Output() toggle = new EventEmitter<void>();
   接受父组件参数
  @Input() v:Array<number>;
  btn(){
    // 发射事件执行父组件方法
    this.toggle.emit();
  }
}
```

# 变化检测策略ChangeDetection(CD)
* 事件 HTTP请求会触发
* 可以手动触发更新检查
```
Default策略
默认情况下，Angular为我们的应用程序中的每个组件定义了一个默认的变化检测策略,默认策略会检查整个CD树
@Component({
  // ...
  changeDetection: ChangeDetectionStrategy.Default
}
export class SomeComponent {
  // ...
}

OnPush
OnPush策略，当外部组件输入数据(即@Input)的引用发生变化或者有事件触发时，组件才进行变化检测，不然不会检测子组件
@Component({
  // ...
  changeDetection: ChangeDetectionStrategy.OnPush
}
export class SomeComponent {
  // ...
}
```

# 自定义表单验证
```
<form class="login" [formGroup] = "formModel" (ngSubmit)="onSubmit(formModel, $event)">
  // ...
  <input matInput type="password" required placeholder="请输入密码" maxLength="16" formControlName="password">
  <button type="submit" mat-raised-button color="primary" class="full" [disabled]="!formModel.valid">登陆</button>
</form>

import { Component, OnInit , ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush //父组件@Input或者事件触发才执行cd检查，否则不检查
})
export class LoginComponent implements OnInit {
  // 绑定页面formGroup变为表单组
  formModel: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // 自定义验证
    this.formModel = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required,Validators.minLength(6)])]
    });
  }

  onSubmit({value, valid}, e: Event) {
    // 所有的表单属性都挂载formModel中
    console.log(this.formModel)
    e.preventDefault();
    if (!valid) {
      return;
    }
  }
}

```