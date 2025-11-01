import{B as e,j as r,T as V,l as D,a as n}from"./Button-cbdc5817.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const u=()=>r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:r("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})}),p=()=>r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:r("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"})}),H={title:"Components/Button",component:e,decorators:[O=>r(V,{theme:D,children:r("div",{style:{padding:"20px"},children:r(O,{})})})],parameters:{layout:"centered",docs:{description:{component:"A versatile button component with multiple variants, sizes, and colors. Fully integrated with the theme system."}}},argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","link"],description:"The visual style variant of the button"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"The size of the button"},color:{control:"select",options:["primary","secondary","success","error","warning","info"],description:"The color scheme of the button"},fullWidth:{control:"boolean",description:"Whether the button should take full width of its container"},loading:{control:"boolean",description:"Show loading spinner"},disabled:{control:"boolean",description:"Whether the button is disabled"},children:{control:"text",description:"The content of the button"}}},t={args:{children:"Primary Button"}},o={render:()=>n("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r(e,{variant:"primary",children:"Primary"}),r(e,{variant:"secondary",children:"Secondary"}),r(e,{variant:"outline",children:"Outline"}),r(e,{variant:"ghost",children:"Ghost"}),r(e,{variant:"link",children:"Link"})]})},a={render:()=>n("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[r(e,{size:"xs",children:"Extra Small"}),r(e,{size:"sm",children:"Small"}),r(e,{size:"md",children:"Medium"}),r(e,{size:"lg",children:"Large"}),r(e,{size:"xl",children:"Extra Large"})]})},i={render:()=>n("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"12px",maxWidth:"600px"},children:[r(e,{color:"primary",children:"Primary"}),r(e,{color:"secondary",children:"Secondary"}),r(e,{color:"success",children:"Success"}),r(e,{color:"error",children:"Error"}),r(e,{color:"warning",children:"Warning"}),r(e,{color:"info",children:"Info"})]})},s={render:()=>n("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r(e,{leftIcon:r(u,{}),children:"Add Item"}),r(e,{rightIcon:r(p,{}),children:"Continue"}),r(e,{leftIcon:r(u,{}),rightIcon:r(p,{}),children:"Add and Continue"})]})},l={render:()=>n("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r(e,{children:"Normal"}),r(e,{loading:!0,children:"Loading"}),r(e,{disabled:!0,children:"Disabled"})]})},c={render:()=>r("div",{style:{width:"300px"},children:r(e,{fullWidth:!0,children:"Full Width Button"})})},d={args:{children:"Click me!",onClick:()=>alert("Button clicked!")}};var h,m,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button'
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var B,y,x;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,f,w;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var I,S,W;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    maxWidth: '600px'
  }}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="error">Error</Button>
      <Button color="warning">Warning</Button>
      <Button color="info">Info</Button>
    </div>
}`,...(W=(S=i.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var z,b,C;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Button leftIcon={<PlusIcon />}>Add Item</Button>
      <Button rightIcon={<ArrowIcon />}>Continue</Button>
      <Button leftIcon={<PlusIcon />} rightIcon={<ArrowIcon />}>
        Add and Continue
      </Button>
    </div>
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var A,k,P;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Button>Normal</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
}`,...(P=(k=l.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var T,L,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <Button fullWidth>Full Width Button</Button>
    </div>
}`,...(E=(L=c.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var F,M,j;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Click me!',
    onClick: () => alert('Button clicked!')
  }
}`,...(j=(M=d.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};const q=["Primary","AllVariants","AllSizes","AllColors","WithIcons","States","FullWidth","Interactive"];export{i as AllColors,a as AllSizes,o as AllVariants,c as FullWidth,d as Interactive,t as Primary,l as States,s as WithIcons,q as __namedExportsOrder,H as default};
