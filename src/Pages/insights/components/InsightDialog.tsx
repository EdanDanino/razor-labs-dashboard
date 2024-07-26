import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { Dialog, Input, Select } from "../../../Shared/Components";
import {
  SEVERTIES,
  TYPES_NUMBER,
  TYPES,
} from "../../../Shared/Constants/inisight-consts";
import { AppDispatch, addDiagnostic } from "../../../Shared/Store";
import { Insight } from "../../../Shared/Types";

type InsightDialogProps = {
  open: boolean;
  setOpenDialog: (flag: boolean) => void;
};

const Footer = styled.footer`
  height: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.medium} 0;
  justify-content: space-between;
`;

const BaseFormButtom = styled.button`
  width: 66px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const SubmitButton = styled(BaseFormButtom)`
  background-color: ${(props) => props.theme.colors.primary.light};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary.default};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;

const validate = (values: Partial<Insight>) => {
  const errors: Record<string, string> = {};
  if (!values.created_at) errors.created_at = "Required";
  if (!values.type) errors.type = "Required";
  if (!values.severity) errors.severity = "Required";
  return errors;
};

const CancelButton = styled(BaseFormButtom)`
  background-color: transparent;
  border: solid 1px ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.text};
`;

export const InsightDialog = ({ open, setOpenDialog }: InsightDialogProps) => {
  const dispatch: AppDispatch = useDispatch();

  const { values, errors, handleChange, submitForm, isSubmitting, resetForm } =
    useFormik<Partial<Insight>>({
      validate,
      validateOnMount: true,
      initialValues: {
        created_at: undefined,
        type: undefined,
        severity: undefined,
      },
      onSubmit: (values) => {
        dispatch(
          addDiagnostic({
            ...values,
            typeNumber: TYPES_NUMBER[values.type!],
          })
        );
        resetForm();
      },
    });

  return (
    <Dialog open={open} title={"Add new diagonostic"}>
      <Form>
        <Input
          name={"created_at"}
          label={"Diagnostic Date"}
          value={values["created_at"]}
          onChange={handleChange}
          type="date"
          error={!!errors.created_at}
        />
        <Select
          name={"type"}
          label={"Fault Type"}
          value={values["type"]}
          onChange={handleChange}
          options={TYPES.map((t) => ({ label: t, value: t }))}
          error={!!errors.type}
        />
        <Select
          name={"severity"}
          label={"Severity"}
          value={values["severity"]}
          onChange={handleChange}
          options={SEVERTIES.map((s) => ({ label: s, value: s }))}
          error={!!errors.severity}
        />
        <Footer>
          <CancelButton
            onClick={() => {
              setOpenDialog(false);
              resetForm();
            }}
          >
            Cancel
          </CancelButton>
          <SubmitButton
            onClick={() => {
              setOpenDialog(false);
              submitForm();
            }}
            disabled={
              isSubmitting ||
              !!(!!errors.created_at || !!errors.type || !!errors.severity)
            }
          >
            Save
          </SubmitButton>
        </Footer>
      </Form>
    </Dialog>
  );
};
