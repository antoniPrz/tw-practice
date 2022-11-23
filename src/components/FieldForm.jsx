export const FieldForm = () => {
  return (
    <>
      <div className='flex flex-col'>
        <form id='youtube' className=' flex flex-col gap-4'>
          <button type='submit'>Submit</button>
        </form>

        <fieldset form='youtube' className=' flex flex-col gap-4'>
          <legend> Youtube </legend>
          <label className='' htmlFor='name'>
            Name
          </label>
          <input className='' type='text' id='name' name='name' />

          <label className='' htmlFor='email'>
            E-mail
          </label>
          <input className='' type='email' id='email' name='email' />

          <label className='' htmlFor='channel'>
            Channel
          </label>
          <input className='' type='text' id='channel' name='channel' />
        </fieldset>
      </div>
    </>
  );
};
