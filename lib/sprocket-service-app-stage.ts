import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SprocketInventoryStack } from './sprocket-inventory-stack';

export class SprocketServiceAppStage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const inventoryStack = new SprocketInventoryStack(this, 'SprocketInventoryStack');
  }
}
