export const actions = {
    default: async ({ request }) => {
      const formData = await request.formData();
      const fName = formData.get('fName');
      const lName = formData.get('lName');
      const TelNum = formData.get('PhoneNumber');
      console.log("WentThroughOk");
      return { success: true };
    },
};
