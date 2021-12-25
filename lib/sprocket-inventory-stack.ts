import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, InlineCode, Runtime } from 'aws-cdk-lib/aws-lambda';

export class SprocketInventoryStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Function(this, 'GetInventoryFunction', {
      runtime: Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: new InlineCode('exports.handler = _ => "No sprockets!";'),
    });
  }
}
