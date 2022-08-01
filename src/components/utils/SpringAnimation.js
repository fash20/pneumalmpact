const createSpringAnimation = (dx, dy, stiffness = 60, damping = 7, mass=1) =>{
    
    const springLength = 1;
    const  k = -stiffness;
    const d= -damping;

    const frameRate = 1/60;

    let x = dx;
    let y = dy;

    let velocityX = 0;
    let velocityY = 0;

    let positions = [];

    let FspringX = k * (x- springLength);
    let FspringY = k * (y- springLength);

    let FdampingX = d * velocityX;
    let FdampingY = d * velocityY;

    let acceX = (FspringX + FdampingX)/mass;
    let acceY = (FspringY + FdampingY)/mass;

    velocityX += acceX*frameRate;
    velocityY += acceY*frameRate;

    x += velocityX * frameRate 
    y += velocityY * frameRate 

    const keyFrame = {transform : `translate (${x}px, ${y}px)`}


}