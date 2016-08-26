export interface ComponentConstructor {
    new (params?: any, element?: Node, templateNodes?: Node[]): any;
}
export declare type ComponentDecorator = (constructor: ComponentConstructor) => void;
export declare type TemplateConfig = (string | Node[] | DocumentFragment | {
    require: string;
} | {
    element: string | Node;
});
/**
 * Register Knockout component by decorating ViewModel class
 */
export declare function component(name: string, options?: Object): ComponentDecorator;
export declare function component(name: string, template: TemplateConfig, options?: Object): ComponentDecorator;
export declare function component(name: string, template: TemplateConfig, styles: string | string[], options?: Object): ComponentDecorator;
/**
 * Property decorator that creates hidden ko.observable with ES6 getter and setter for it
 */
export declare function observable(target: Object, key: string | symbol): void;
/**
 * Accessor decorator that wraps ES6 getter and setter to hidden ko.pureComputed
 */
export declare function computed(target: Object, key: string | symbol): void;
