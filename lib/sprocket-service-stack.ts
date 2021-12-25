import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { SprocketServiceAppStage } from './sprocket-service-app-stage';

export class SprocketServiceStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'SprocketServicePipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('8888/sprocket-service', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      }),
    });

    pipeline.addStage(new SprocketServiceAppStage(this, "SprocketServiceAppStage", {
      // Integration account
      env: { account: '933315113919', region: 'us-east-1' },
    }));
  }
}
