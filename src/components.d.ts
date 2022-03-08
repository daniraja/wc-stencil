/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WcAlert {
        "autoClose": boolean;
        "closeIcon": boolean;
        "closeInMs": number;
        "heading": string;
        "message": string;
        "show": boolean;
        "size": 'sm' | 'md' | 'lg';
        "type": 'success' | 'warning' | 'error' | 'info';
    }
    interface WcLoading {
        "backdrop": boolean;
        "type": 'partial' | 'full';
    }
    interface WcSideDrawer {
        "closable": boolean;
        "headerText": string;
        "open": boolean;
        "openDrawer": () => Promise<void>;
    }
    interface WcStockFinder {
    }
    interface WcStockPrice {
        "alertHeading": any;
        "alertMsg": any;
        "alertShow": any;
        "alertType": any;
    }
    interface WcToolTip {
        "infoText": string;
        "visible": boolean;
    }
}
declare global {
    interface HTMLWcAlertElement extends Components.WcAlert, HTMLStencilElement {
    }
    var HTMLWcAlertElement: {
        prototype: HTMLWcAlertElement;
        new (): HTMLWcAlertElement;
    };
    interface HTMLWcLoadingElement extends Components.WcLoading, HTMLStencilElement {
    }
    var HTMLWcLoadingElement: {
        prototype: HTMLWcLoadingElement;
        new (): HTMLWcLoadingElement;
    };
    interface HTMLWcSideDrawerElement extends Components.WcSideDrawer, HTMLStencilElement {
    }
    var HTMLWcSideDrawerElement: {
        prototype: HTMLWcSideDrawerElement;
        new (): HTMLWcSideDrawerElement;
    };
    interface HTMLWcStockFinderElement extends Components.WcStockFinder, HTMLStencilElement {
    }
    var HTMLWcStockFinderElement: {
        prototype: HTMLWcStockFinderElement;
        new (): HTMLWcStockFinderElement;
    };
    interface HTMLWcStockPriceElement extends Components.WcStockPrice, HTMLStencilElement {
    }
    var HTMLWcStockPriceElement: {
        prototype: HTMLWcStockPriceElement;
        new (): HTMLWcStockPriceElement;
    };
    interface HTMLWcToolTipElement extends Components.WcToolTip, HTMLStencilElement {
    }
    var HTMLWcToolTipElement: {
        prototype: HTMLWcToolTipElement;
        new (): HTMLWcToolTipElement;
    };
    interface HTMLElementTagNameMap {
        "wc-alert": HTMLWcAlertElement;
        "wc-loading": HTMLWcLoadingElement;
        "wc-side-drawer": HTMLWcSideDrawerElement;
        "wc-stock-finder": HTMLWcStockFinderElement;
        "wc-stock-price": HTMLWcStockPriceElement;
        "wc-tool-tip": HTMLWcToolTipElement;
    }
}
declare namespace LocalJSX {
    interface WcAlert {
        "autoClose"?: boolean;
        "closeIcon"?: boolean;
        "closeInMs"?: number;
        "heading"?: string;
        "message"?: string;
        "show"?: boolean;
        "size"?: 'sm' | 'md' | 'lg';
        "type"?: 'success' | 'warning' | 'error' | 'info';
    }
    interface WcLoading {
        "backdrop"?: boolean;
        "type"?: 'partial' | 'full';
    }
    interface WcSideDrawer {
        "closable"?: boolean;
        "headerText"?: string;
        "open"?: boolean;
    }
    interface WcStockFinder {
        "onWcSelectedSymbol"?: (event: CustomEvent<string>) => void;
    }
    interface WcStockPrice {
        "alertHeading"?: any;
        "alertMsg"?: any;
        "alertShow"?: any;
        "alertType"?: any;
    }
    interface WcToolTip {
        "infoText"?: string;
        "visible"?: boolean;
    }
    interface IntrinsicElements {
        "wc-alert": WcAlert;
        "wc-loading": WcLoading;
        "wc-side-drawer": WcSideDrawer;
        "wc-stock-finder": WcStockFinder;
        "wc-stock-price": WcStockPrice;
        "wc-tool-tip": WcToolTip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wc-alert": LocalJSX.WcAlert & JSXBase.HTMLAttributes<HTMLWcAlertElement>;
            "wc-loading": LocalJSX.WcLoading & JSXBase.HTMLAttributes<HTMLWcLoadingElement>;
            "wc-side-drawer": LocalJSX.WcSideDrawer & JSXBase.HTMLAttributes<HTMLWcSideDrawerElement>;
            "wc-stock-finder": LocalJSX.WcStockFinder & JSXBase.HTMLAttributes<HTMLWcStockFinderElement>;
            "wc-stock-price": LocalJSX.WcStockPrice & JSXBase.HTMLAttributes<HTMLWcStockPriceElement>;
            "wc-tool-tip": LocalJSX.WcToolTip & JSXBase.HTMLAttributes<HTMLWcToolTipElement>;
        }
    }
}
