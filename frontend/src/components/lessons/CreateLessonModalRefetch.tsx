import React from "react";
import {
  createRefetchContainer,
  GraphQLTaggedNode,
  RelayRefetchProp
} from "react-relay";
import { Modal } from "antd";
import { Store } from "rc-field-form/lib/interface";
import { graphql } from "babel-plugin-relay/macro";

import { CreateLessonForm } from "../form/CreateLessonForm";
import { commit as commitCreateOneLessonMutation } from "../../graphql/mutations/CreateOneLessonMutation";
import { CreateOneLessonMutationResponse } from "../../graphql/mutations/__generated__/CreateOneLessonMutation.graphql";

type ModalProps = {
  title: string;
  visible: boolean;
  onSubmitSuccess: any;
  onSubmitError: any;
  onCancel: any;
  relay: RelayRefetchProp;
};
export default (refetchQuery: GraphQLTaggedNode) =>
  createRefetchContainer(
    ({
      title,
      visible,
      onSubmitSuccess,
      onSubmitError,
      onCancel,
      relay
    }: ModalProps) => {
      const onCreateLessonMutationSuccess = (
        response: CreateOneLessonMutationResponse
      ) => {
        relay.refetch({}, null, e => console.log(e ?? "success"), {
          force: true
        });
        onSubmitSuccess();
      };
      const onSubmit = ({ title }: Store): void => {
        commitCreateOneLessonMutation(
          { data: { title } },
          onCreateLessonMutationSuccess,
          onSubmitError
        );
      };
      return (
        <Modal visible={visible} title={title} onCancel={onCancel} footer={[]}>
          <CreateLessonForm onSubmit={onSubmit} onSubmitError={onSubmitError} />
        </Modal>
      );
    },
    {},
    refetchQuery
  );
