import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import axios from "@/lib/api/client";

const plans = [
  { label: "Free", value: "Free" },
  { label: "Basic", value: "Basic" },
  { label: "Pro", value: "Pro" },
  { label: "Elite", value: "Elite" },
];

export default function ChangePlanModal({ open, onClose, currentPlan, onUpgrade }) {
  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: { plan: currentPlan },
  });

  const selectedPlan = watch("plan");

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/user/subscription/upgrade", {
        plan: data.plan,
      });

      if (res.data.success) {
        onUpgrade(); // Refresh data
        onClose();
      }
    } catch (err) {
      console.error("Upgrade failed", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Your Plan</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <RadioGroup
            onValueChange={(val) => setValue("plan", val)}
            defaultValue={currentPlan}
            className="space-y-2"
          >
            {plans.map((plan) => (
              <div key={plan.value} className="flex items-center space-x-2">
                <RadioGroupItem value={plan.value} id={plan.value} />
                <label htmlFor={plan.value} className="text-sm font-medium">
                  {plan.label}
                </label>
              </div>
            ))}
          </RadioGroup>

          <DialogFooter>
            <Button type="submit" disabled={selectedPlan === currentPlan}>
              Confirm
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}